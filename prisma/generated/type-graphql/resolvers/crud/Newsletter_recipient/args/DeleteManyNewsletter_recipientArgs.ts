import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientWhereInput } from "../../../inputs/Newsletter_recipientWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipientWhereInput | undefined;
}
