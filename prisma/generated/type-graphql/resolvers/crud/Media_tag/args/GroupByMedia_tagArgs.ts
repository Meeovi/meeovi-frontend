import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagOrderByWithAggregationInput } from "../../../inputs/Media_tagOrderByWithAggregationInput";
import { Media_tagScalarWhereWithAggregatesInput } from "../../../inputs/Media_tagScalarWhereWithAggregatesInput";
import { Media_tagWhereInput } from "../../../inputs/Media_tagWhereInput";
import { Media_tagScalarFieldEnum } from "../../../../enums/Media_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_tagArgs {
  @TypeGraphQL.Field(_type => Media_tagWhereInput, {
    nullable: true
  })
  where?: Media_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"media_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Media_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
