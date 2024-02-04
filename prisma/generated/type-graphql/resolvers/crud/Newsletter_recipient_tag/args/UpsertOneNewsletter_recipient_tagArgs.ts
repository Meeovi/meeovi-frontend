import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipient_tagCreateInput } from "../../../inputs/Newsletter_recipient_tagCreateInput";
import { Newsletter_recipient_tagUpdateInput } from "../../../inputs/Newsletter_recipient_tagUpdateInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../../../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNewsletter_recipient_tagArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipient_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateInput, {
    nullable: false
  })
  create!: Newsletter_recipient_tagCreateInput;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagUpdateInput, {
    nullable: false
  })
  update!: Newsletter_recipient_tagUpdateInput;
}
