import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitCreateManyInput } from "../../../inputs/UnitCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUnitArgs {
  @TypeGraphQL.Field(_type => [UnitCreateManyInput], {
    nullable: false
  })
  data!: UnitCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
