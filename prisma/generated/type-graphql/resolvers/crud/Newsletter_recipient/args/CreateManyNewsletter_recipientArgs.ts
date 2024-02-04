import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientCreateManyInput } from "../../../inputs/Newsletter_recipientCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateManyInput], {
    nullable: false
  })
  data!: Newsletter_recipientCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
