import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_country_roundingWhereInput } from "../../../inputs/Currency_country_roundingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurrency_country_roundingArgs {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereInput, {
    nullable: true
  })
  where?: Currency_country_roundingWhereInput | undefined;
}
