import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodCreateManyInput } from "../../../inputs/App_shipping_methodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => [App_shipping_methodCreateManyInput], {
    nullable: false
  })
  data!: App_shipping_methodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
