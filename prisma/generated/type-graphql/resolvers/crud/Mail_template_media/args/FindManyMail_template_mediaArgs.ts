import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Mail_template_mediaOrderByWithRelationAndSearchRelevanceInput";
import { Mail_template_mediaWhereInput } from "../../../inputs/Mail_template_mediaWhereInput";
import { Mail_template_mediaWhereUniqueInput } from "../../../inputs/Mail_template_mediaWhereUniqueInput";
import { Mail_template_mediaScalarFieldEnum } from "../../../../enums/Mail_template_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereInput, {
    nullable: true
  })
  where?: Mail_template_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Mail_template_mediaOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Mail_template_mediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "mail_template_id" | "language_id" | "media_id" | "position"> | undefined;
}
