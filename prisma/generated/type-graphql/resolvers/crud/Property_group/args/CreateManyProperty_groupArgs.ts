import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupCreateManyInput } from "../../../inputs/Property_groupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProperty_groupArgs {
  @TypeGraphQL.Field(_type => [Property_groupCreateManyInput], {
    nullable: false
  })
  data!: Property_groupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
