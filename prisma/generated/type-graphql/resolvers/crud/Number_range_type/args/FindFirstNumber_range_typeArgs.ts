import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Number_range_typeOrderByWithRelationAndSearchRelevanceInput";
import { Number_range_typeWhereInput } from "../../../inputs/Number_range_typeWhereInput";
import { Number_range_typeWhereUniqueInput } from "../../../inputs/Number_range_typeWhereUniqueInput";
import { Number_range_typeScalarFieldEnum } from "../../../../enums/Number_range_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNumber_range_typeArgs {
  @TypeGraphQL.Field(_type => Number_range_typeWhereInput, {
    nullable: true
  })
  where?: Number_range_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_typeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Number_range_typeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Number_range_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Number_range_typeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "technical_name" | "global" | "created_at" | "updated_at"> | undefined;
}
