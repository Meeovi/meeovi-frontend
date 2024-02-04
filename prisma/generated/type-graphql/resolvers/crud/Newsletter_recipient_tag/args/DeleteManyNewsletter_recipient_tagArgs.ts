import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipient_tagWhereInput } from "../../../inputs/Newsletter_recipient_tagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNewsletter_recipient_tagArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipient_tagWhereInput | undefined;
}
