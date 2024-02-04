import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipient_tagWhereUniqueInput } from "../../../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNewsletter_recipient_tagArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipient_tagWhereUniqueInput;
}
