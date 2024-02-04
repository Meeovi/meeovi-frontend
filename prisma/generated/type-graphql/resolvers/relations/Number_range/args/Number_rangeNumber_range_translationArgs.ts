import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Number_range_translationOrderByWithRelationAndSearchRelevanceInput";
import { Number_range_translationWhereInput } from "../../../inputs/Number_range_translationWhereInput";
import { Number_range_translationWhereUniqueInput } from "../../../inputs/Number_range_translationWhereUniqueInput";
import { Number_range_translationScalarFieldEnum } from "../../../../enums/Number_range_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Number_rangeNumber_range_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_translationWhereInput, {
    nullable: true
  })
  where?: Number_range_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Number_range_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Number_range_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"number_range_id" | "name" | "description" | "custom_fields" | "language_id" | "created_at" | "updated_at"> | undefined;
}
