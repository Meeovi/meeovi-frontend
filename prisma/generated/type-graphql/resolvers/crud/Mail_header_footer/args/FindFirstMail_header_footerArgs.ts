import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Mail_header_footerOrderByWithRelationAndSearchRelevanceInput";
import { Mail_header_footerWhereInput } from "../../../inputs/Mail_header_footerWhereInput";
import { Mail_header_footerWhereUniqueInput } from "../../../inputs/Mail_header_footerWhereUniqueInput";
import { Mail_header_footerScalarFieldEnum } from "../../../../enums/Mail_header_footerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMail_header_footerArgs {
  @TypeGraphQL.Field(_type => Mail_header_footerWhereInput, {
    nullable: true
  })
  where?: Mail_header_footerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Mail_header_footerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerWhereUniqueInput, {
    nullable: true
  })
  cursor?: Mail_header_footerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "system_default" | "created_at" | "updated_at"> | undefined;
}
