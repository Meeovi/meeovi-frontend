import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Number_rangeOrderByWithRelationAndSearchRelevanceInput";
import { Number_rangeWhereInput } from "../../../inputs/Number_rangeWhereInput";
import { Number_rangeWhereUniqueInput } from "../../../inputs/Number_rangeWhereUniqueInput";
import { Number_rangeScalarFieldEnum } from "../../../../enums/Number_rangeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  where?: Number_rangeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_rangeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Number_rangeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Number_rangeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Number_rangeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type_id" | "global" | "pattern" | "start" | "created_at" | "updated_at"> | undefined;
}
