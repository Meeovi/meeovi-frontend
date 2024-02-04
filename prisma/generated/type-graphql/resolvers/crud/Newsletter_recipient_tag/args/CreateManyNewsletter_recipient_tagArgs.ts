import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipient_tagCreateManyInput } from "../../../inputs/Newsletter_recipient_tagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNewsletter_recipient_tagArgs {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateManyInput], {
    nullable: false
  })
  data!: Newsletter_recipient_tagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
