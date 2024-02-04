import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerOrderByWithAggregationInput } from "../../../inputs/Mail_header_footerOrderByWithAggregationInput";
import { Mail_header_footerScalarWhereWithAggregatesInput } from "../../../inputs/Mail_header_footerScalarWhereWithAggregatesInput";
import { Mail_header_footerWhereInput } from "../../../inputs/Mail_header_footerWhereInput";
import { Mail_header_footerScalarFieldEnum } from "../../../../enums/Mail_header_footerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMail_header_footerArgs {
  @TypeGraphQL.Field(_type => Mail_header_footerWhereInput, {
    nullable: true
  })
  where?: Mail_header_footerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Mail_header_footerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "system_default" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Mail_header_footerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Mail_header_footerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
