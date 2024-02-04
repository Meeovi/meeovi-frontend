import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageCreateInput } from "../../../inputs/Dead_messageCreateInput";
import { Dead_messageUpdateInput } from "../../../inputs/Dead_messageUpdateInput";
import { Dead_messageWhereUniqueInput } from "../../../inputs/Dead_messageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageWhereUniqueInput, {
    nullable: false
  })
  where!: Dead_messageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Dead_messageCreateInput, {
    nullable: false
  })
  create!: Dead_messageCreateInput;

  @TypeGraphQL.Field(_type => Dead_messageUpdateInput, {
    nullable: false
  })
  update!: Dead_messageUpdateInput;
}
