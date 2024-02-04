import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_type_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Number_range_type_translationOrderByWithRelationAndSearchRelevanceInput";
import { Number_range_type_translationWhereInput } from "../../../inputs/Number_range_type_translationWhereInput";
import { Number_range_type_translationWhereUniqueInput } from "../../../inputs/Number_range_type_translationWhereUniqueInput";
import { Number_range_type_translationScalarFieldEnum } from "../../../../enums/Number_range_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Number_range_typeNumber_range_type_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_type_translationWhereInput, {
    nullable: true
  })
  where?: Number_range_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Number_range_type_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Number_range_type_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"number_range_type_id" | "language_id" | "type_name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
