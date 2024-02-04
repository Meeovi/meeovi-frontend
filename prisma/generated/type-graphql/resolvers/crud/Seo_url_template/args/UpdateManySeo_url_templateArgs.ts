import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateUpdateManyMutationInput } from "../../../inputs/Seo_url_templateUpdateManyMutationInput";
import { Seo_url_templateWhereInput } from "../../../inputs/Seo_url_templateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Seo_url_templateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Seo_url_templateWhereInput, {
    nullable: true
  })
  where?: Seo_url_templateWhereInput | undefined;
}
