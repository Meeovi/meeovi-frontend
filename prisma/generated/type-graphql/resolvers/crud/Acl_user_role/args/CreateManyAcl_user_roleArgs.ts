import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleCreateManyInput } from "../../../inputs/Acl_user_roleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => [Acl_user_roleCreateManyInput], {
    nullable: false
  })
  data!: Acl_user_roleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
