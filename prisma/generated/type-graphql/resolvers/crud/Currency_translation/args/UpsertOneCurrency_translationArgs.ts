import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationCreateInput } from "../../../inputs/Currency_translationCreateInput";
import { Currency_translationUpdateInput } from "../../../inputs/Currency_translationUpdateInput";
import { Currency_translationWhereUniqueInput } from "../../../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_translationCreateInput, {
    nullable: false
  })
  create!: Currency_translationCreateInput;

  @TypeGraphQL.Field(_type => Currency_translationUpdateInput, {
    nullable: false
  })
  update!: Currency_translationUpdateInput;
}
