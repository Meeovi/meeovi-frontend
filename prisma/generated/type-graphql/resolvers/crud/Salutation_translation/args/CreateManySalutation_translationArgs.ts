import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationCreateManyInput } from "../../../inputs/Salutation_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySalutation_translationArgs {
  @TypeGraphQL.Field(_type => [Salutation_translationCreateManyInput], {
    nullable: false
  })
  data!: Salutation_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
