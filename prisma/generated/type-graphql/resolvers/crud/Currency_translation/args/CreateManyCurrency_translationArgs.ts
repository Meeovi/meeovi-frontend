import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationCreateManyInput } from "../../../inputs/Currency_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCurrency_translationArgs {
  @TypeGraphQL.Field(_type => [Currency_translationCreateManyInput], {
    nullable: false
  })
  data!: Currency_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
