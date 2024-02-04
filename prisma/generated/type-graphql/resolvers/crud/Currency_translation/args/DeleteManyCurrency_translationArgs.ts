import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationWhereInput } from "../../../inputs/Currency_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationWhereInput, {
    nullable: true
  })
  where?: Currency_translationWhereInput | undefined;
}
