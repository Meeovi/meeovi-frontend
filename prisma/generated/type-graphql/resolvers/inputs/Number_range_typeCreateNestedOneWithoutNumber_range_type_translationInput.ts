import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeCreateOrConnectWithoutNumber_range_type_translationInput } from "../inputs/Number_range_typeCreateOrConnectWithoutNumber_range_type_translationInput";
import { Number_range_typeCreateWithoutNumber_range_type_translationInput } from "../inputs/Number_range_typeCreateWithoutNumber_range_type_translationInput";
import { Number_range_typeWhereUniqueInput } from "../inputs/Number_range_typeWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_typeCreateNestedOneWithoutNumber_range_type_translationInput", {})
export class Number_range_typeCreateNestedOneWithoutNumber_range_type_translationInput {
  @TypeGraphQL.Field(_type => Number_range_typeCreateWithoutNumber_range_type_translationInput, {
    nullable: true
  })
  create?: Number_range_typeCreateWithoutNumber_range_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeCreateOrConnectWithoutNumber_range_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: Number_range_typeCreateOrConnectWithoutNumber_range_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Number_range_typeWhereUniqueInput | undefined;
}
