import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageWhereUniqueInput } from "../../../inputs/Dead_messageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageWhereUniqueInput, {
    nullable: false
  })
  where!: Dead_messageWhereUniqueInput;
}
