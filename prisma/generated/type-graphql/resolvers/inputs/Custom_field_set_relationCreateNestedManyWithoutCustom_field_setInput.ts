import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationCreateManyCustom_field_setInputEnvelope } from "../inputs/Custom_field_set_relationCreateManyCustom_field_setInputEnvelope";
import { Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput";
import { Custom_field_set_relationCreateWithoutCustom_field_setInput } from "../inputs/Custom_field_set_relationCreateWithoutCustom_field_setInput";
import { Custom_field_set_relationWhereUniqueInput } from "../inputs/Custom_field_set_relationWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_set_relationCreateNestedManyWithoutCustom_field_setInput", {})
export class Custom_field_set_relationCreateNestedManyWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => [Custom_field_set_relationCreateWithoutCustom_field_setInput], {
    nullable: true
  })
  create?: Custom_field_set_relationCreateWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput], {
    nullable: true
  })
  connectOrCreate?: Custom_field_set_relationCreateOrConnectWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationCreateManyCustom_field_setInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_field_set_relationCreateManyCustom_field_setInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_field_set_relationWhereUniqueInput[] | undefined;
}
