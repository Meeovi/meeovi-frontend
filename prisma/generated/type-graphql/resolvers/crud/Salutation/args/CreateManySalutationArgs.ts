import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationCreateManyInput } from "../../../inputs/SalutationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySalutationArgs {
  @TypeGraphQL.Field(_type => [SalutationCreateManyInput], {
    nullable: false
  })
  data!: SalutationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
