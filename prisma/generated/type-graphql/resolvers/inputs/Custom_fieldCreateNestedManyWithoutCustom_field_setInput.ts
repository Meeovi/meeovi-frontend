import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateManyCustom_field_setInputEnvelope } from "../inputs/Custom_fieldCreateManyCustom_field_setInputEnvelope";
import { Custom_fieldCreateOrConnectWithoutCustom_field_setInput } from "../inputs/Custom_fieldCreateOrConnectWithoutCustom_field_setInput";
import { Custom_fieldCreateWithoutCustom_field_setInput } from "../inputs/Custom_fieldCreateWithoutCustom_field_setInput";
import { Custom_fieldWhereUniqueInput } from "../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Custom_fieldCreateNestedManyWithoutCustom_field_setInput", {})
export class Custom_fieldCreateNestedManyWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => [Custom_fieldCreateWithoutCustom_field_setInput], {
    nullable: true
  })
  create?: Custom_fieldCreateWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldCreateOrConnectWithoutCustom_field_setInput], {
    nullable: true
  })
  connectOrCreate?: Custom_fieldCreateOrConnectWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldCreateManyCustom_field_setInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_fieldCreateManyCustom_field_setInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_fieldWhereUniqueInput[] | undefined;
}
