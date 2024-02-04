import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientWhereUniqueInput } from "../../../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;
}
