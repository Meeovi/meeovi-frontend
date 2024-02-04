import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleCreateManyInput } from "../../../inputs/Acl_roleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAcl_roleArgs {
  @TypeGraphQL.Field(_type => [Acl_roleCreateManyInput], {
    nullable: false
  })
  data!: Acl_roleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
