import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateManyAppInputEnvelope } from "../inputs/App_shipping_methodCreateManyAppInputEnvelope";
import { App_shipping_methodCreateOrConnectWithoutAppInput } from "../inputs/App_shipping_methodCreateOrConnectWithoutAppInput";
import { App_shipping_methodCreateWithoutAppInput } from "../inputs/App_shipping_methodCreateWithoutAppInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodCreateNestedManyWithoutAppInput", {})
export class App_shipping_methodCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_shipping_methodCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_shipping_methodCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_shipping_methodCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_shipping_methodCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: App_shipping_methodWhereUniqueInput[] | undefined;
}
