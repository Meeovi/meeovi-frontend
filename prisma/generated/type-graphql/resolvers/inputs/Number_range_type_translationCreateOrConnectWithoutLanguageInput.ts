import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_type_translationCreateWithoutLanguageInput } from "../inputs/Number_range_type_translationCreateWithoutLanguageInput";
import { Number_range_type_translationWhereUniqueInput } from "../inputs/Number_range_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_type_translationCreateOrConnectWithoutLanguageInput", {})
export class Number_range_type_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Number_range_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Number_range_type_translationCreateWithoutLanguageInput;
}
