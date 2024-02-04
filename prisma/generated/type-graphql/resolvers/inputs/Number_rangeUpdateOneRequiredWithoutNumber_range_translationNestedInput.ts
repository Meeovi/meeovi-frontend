import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeCreateOrConnectWithoutNumber_range_translationInput } from "../inputs/Number_rangeCreateOrConnectWithoutNumber_range_translationInput";
import { Number_rangeCreateWithoutNumber_range_translationInput } from "../inputs/Number_rangeCreateWithoutNumber_range_translationInput";
import { Number_rangeUpdateToOneWithWhereWithoutNumber_range_translationInput } from "../inputs/Number_rangeUpdateToOneWithWhereWithoutNumber_range_translationInput";
import { Number_rangeUpsertWithoutNumber_range_translationInput } from "../inputs/Number_rangeUpsertWithoutNumber_range_translationInput";
import { Number_rangeWhereUniqueInput } from "../inputs/Number_rangeWhereUniqueInput";

@TypeGraphQL.InputType("Number_rangeUpdateOneRequiredWithoutNumber_range_translationNestedInput", {})
export class Number_rangeUpdateOneRequiredWithoutNumber_range_translationNestedInput {
  @TypeGraphQL.Field(_type => Number_rangeCreateWithoutNumber_range_translationInput, {
    nullable: true
  })
  create?: Number_rangeCreateWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeCreateOrConnectWithoutNumber_range_translationInput, {
    nullable: true
  })
  connectOrCreate?: Number_rangeCreateOrConnectWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeUpsertWithoutNumber_range_translationInput, {
    nullable: true
  })
  upsert?: Number_rangeUpsertWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: true
  })
  connect?: Number_rangeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeUpdateToOneWithWhereWithoutNumber_range_translationInput, {
    nullable: true
  })
  update?: Number_rangeUpdateToOneWithWhereWithoutNumber_range_translationInput | undefined;
}
