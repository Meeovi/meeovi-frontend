import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Rule_tagOrderByWithRelationAndSearchRelevanceInput";
import { Rule_tagWhereInput } from "../../../inputs/Rule_tagWhereInput";
import { Rule_tagWhereUniqueInput } from "../../../inputs/Rule_tagWhereUniqueInput";
import { Rule_tagScalarFieldEnum } from "../../../../enums/Rule_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagWhereInput, {
    nullable: true
  })
  where?: Rule_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Rule_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Rule_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Rule_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Rule_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Rule_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"rule_id" | "tag_id"> | undefined;
}
