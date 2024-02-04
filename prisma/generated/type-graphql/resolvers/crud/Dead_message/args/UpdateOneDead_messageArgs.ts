import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageUpdateInput } from "../../../inputs/Dead_messageUpdateInput";
import { Dead_messageWhereUniqueInput } from "../../../inputs/Dead_messageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageUpdateInput, {
    nullable: false
  })
  data!: Dead_messageUpdateInput;

  @TypeGraphQL.Field(_type => Dead_messageWhereUniqueInput, {
    nullable: false
  })
  where!: Dead_messageWhereUniqueInput;
}
