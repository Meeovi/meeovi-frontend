import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateManyMediaInputEnvelope } from "../inputs/App_shipping_methodCreateManyMediaInputEnvelope";
import { App_shipping_methodCreateOrConnectWithoutMediaInput } from "../inputs/App_shipping_methodCreateOrConnectWithoutMediaInput";
import { App_shipping_methodCreateWithoutMediaInput } from "../inputs/App_shipping_methodCreateWithoutMediaInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodCreateNestedManyWithoutMediaInput", {})
export class App_shipping_methodCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [App_shipping_methodCreateWithoutMediaInput], {
    nullable: true
  })
  create?: App_shipping_methodCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: App_shipping_methodCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: App_shipping_methodCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: App_shipping_methodWhereUniqueInput[] | undefined;
}
