import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipient_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Newsletter_recipient_tagOrderByWithRelationAndSearchRelevanceInput";
import { Newsletter_recipient_tagWhereInput } from "../../../inputs/Newsletter_recipient_tagWhereInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../../../inputs/Newsletter_recipient_tagWhereUniqueInput";
import { Newsletter_recipient_tagScalarFieldEnum } from "../../../../enums/Newsletter_recipient_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNewsletter_recipient_tagArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipient_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Newsletter_recipient_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Newsletter_recipient_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"newsletter_recipient_id" | "tag_id"> | undefined;
}
