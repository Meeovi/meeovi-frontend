import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_type_translationCreateManyLanguageInputEnvelope } from "../inputs/Number_range_type_translationCreateManyLanguageInputEnvelope";
import { Number_range_type_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Number_range_type_translationCreateOrConnectWithoutLanguageInput";
import { Number_range_type_translationCreateWithoutLanguageInput } from "../inputs/Number_range_type_translationCreateWithoutLanguageInput";
import { Number_range_type_translationWhereUniqueInput } from "../inputs/Number_range_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_type_translationCreateNestedManyWithoutLanguageInput", {})
export class Number_range_type_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Number_range_type_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Number_range_type_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_type_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_type_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_type_translationWhereUniqueInput[] | undefined;
}
