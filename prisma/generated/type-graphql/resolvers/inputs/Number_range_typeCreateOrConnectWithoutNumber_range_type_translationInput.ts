import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeCreateWithoutNumber_range_type_translationInput } from "../inputs/Number_range_typeCreateWithoutNumber_range_type_translationInput";
import { Number_range_typeWhereUniqueInput } from "../inputs/Number_range_typeWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_typeCreateOrConnectWithoutNumber_range_type_translationInput", {})
export class Number_range_typeCreateOrConnectWithoutNumber_range_type_translationInput {
  @TypeGraphQL.Field(_type => Number_range_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_typeCreateWithoutNumber_range_type_translationInput, {
    nullable: false
  })
  create!: Number_range_typeCreateWithoutNumber_range_type_translationInput;
}
