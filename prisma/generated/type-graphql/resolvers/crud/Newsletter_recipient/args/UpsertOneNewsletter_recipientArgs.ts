import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_recipientCreateInput } from "../../../inputs/Newsletter_recipientCreateInput";
import { Newsletter_recipientUpdateInput } from "../../../inputs/Newsletter_recipientUpdateInput";
import { Newsletter_recipientWhereUniqueInput } from "../../../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNewsletter_recipientArgs {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateInput, {
    nullable: false
  })
  create!: Newsletter_recipientCreateInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateInput, {
    nullable: false
  })
  update!: Newsletter_recipientUpdateInput;
}
