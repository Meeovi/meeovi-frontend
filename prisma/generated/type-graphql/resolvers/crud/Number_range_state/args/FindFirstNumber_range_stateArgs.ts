import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Number_range_stateOrderByWithRelationAndSearchRelevanceInput";
import { Number_range_stateWhereInput } from "../../../inputs/Number_range_stateWhereInput";
import { Number_range_stateWhereUniqueInput } from "../../../inputs/Number_range_stateWhereUniqueInput";
import { Number_range_stateScalarFieldEnum } from "../../../../enums/Number_range_stateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => Number_range_stateWhereInput, {
    nullable: true
  })
  where?: Number_range_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Number_range_stateOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_stateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Number_range_stateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "number_range_id" | "last_value" | "created_at" | "updated_at"> | undefined;
}
