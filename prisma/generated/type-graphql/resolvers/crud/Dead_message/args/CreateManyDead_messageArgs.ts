import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageCreateManyInput } from "../../../inputs/Dead_messageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDead_messageArgs {
  @TypeGraphQL.Field(_type => [Dead_messageCreateManyInput], {
    nullable: false
  })
  data!: Dead_messageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
