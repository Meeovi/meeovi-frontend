import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyLanguageInputEnvelope } from "../inputs/OrderCreateManyLanguageInputEnvelope";
import { OrderCreateOrConnectWithoutLanguageInput } from "../inputs/OrderCreateOrConnectWithoutLanguageInput";
import { OrderCreateWithoutLanguageInput } from "../inputs/OrderCreateWithoutLanguageInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutLanguageInput", {})
export class OrderCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: OrderCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
