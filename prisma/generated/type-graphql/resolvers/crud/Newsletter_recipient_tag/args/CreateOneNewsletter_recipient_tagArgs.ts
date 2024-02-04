import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipient_tagCreateInput } from "../../../inputs/Newsletter_recipient_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNewsletter_recipient_tagArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateInput, {
    nullable: false
  })
  data!: Newsletter_recipient_tagCreateInput;
}
