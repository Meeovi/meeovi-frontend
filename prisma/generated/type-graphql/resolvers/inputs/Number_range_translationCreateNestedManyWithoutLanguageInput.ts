import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationCreateManyLanguageInputEnvelope } from "../inputs/Number_range_translationCreateManyLanguageInputEnvelope";
import { Number_range_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Number_range_translationCreateOrConnectWithoutLanguageInput";
import { Number_range_translationCreateWithoutLanguageInput } from "../inputs/Number_range_translationCreateWithoutLanguageInput";
import { Number_range_translationWhereUniqueInput } from "../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_translationCreateNestedManyWithoutLanguageInput", {})
export class Number_range_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Number_range_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Number_range_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_translationWhereUniqueInput[] | undefined;
}
