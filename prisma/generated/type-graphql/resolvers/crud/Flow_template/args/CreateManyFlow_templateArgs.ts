import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateCreateManyInput } from "../../../inputs/Flow_templateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlow_templateArgs {
  @TypeGraphQL.Field(_type => [Flow_templateCreateManyInput], {
    nullable: false
  })
  data!: Flow_templateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
