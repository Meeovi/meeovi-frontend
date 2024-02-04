import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateManyAppInputEnvelope } from "../inputs/App_payment_methodCreateManyAppInputEnvelope";
import { App_payment_methodCreateOrConnectWithoutAppInput } from "../inputs/App_payment_methodCreateOrConnectWithoutAppInput";
import { App_payment_methodCreateWithoutAppInput } from "../inputs/App_payment_methodCreateWithoutAppInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodCreateNestedManyWithoutAppInput", {})
export class App_payment_methodCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_payment_methodCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_payment_methodCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_payment_methodCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_payment_methodCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: App_payment_methodWhereUniqueInput[] | undefined;
}
