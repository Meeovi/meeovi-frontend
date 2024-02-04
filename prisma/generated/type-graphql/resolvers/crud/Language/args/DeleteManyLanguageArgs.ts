import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
