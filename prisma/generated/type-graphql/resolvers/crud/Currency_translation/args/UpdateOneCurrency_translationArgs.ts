import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationUpdateInput } from "../../../inputs/Currency_translationUpdateInput";
import { Currency_translationWhereUniqueInput } from "../../../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationUpdateInput, {
    nullable: false
  })
  data!: Currency_translationUpdateInput;

  @TypeGraphQL.Field(_type => Currency_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_translationWhereUniqueInput;
}
