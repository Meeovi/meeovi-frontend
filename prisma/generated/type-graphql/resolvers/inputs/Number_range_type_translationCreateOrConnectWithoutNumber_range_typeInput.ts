import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_type_translationCreateWithoutNumber_range_typeInput } from "../inputs/Number_range_type_translationCreateWithoutNumber_range_typeInput";
import { Number_range_type_translationWhereUniqueInput } from "../inputs/Number_range_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_type_translationCreateOrConnectWithoutNumber_range_typeInput", {})
export class Number_range_type_translationCreateOrConnectWithoutNumber_range_typeInput {
  @TypeGraphQL.Field(_type => Number_range_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateWithoutNumber_range_typeInput, {
    nullable: false
  })
  create!: Number_range_type_translationCreateWithoutNumber_range_typeInput;
}
