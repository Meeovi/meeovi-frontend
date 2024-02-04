import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_payment_methodCreateManyInput } from "../../../inputs/App_payment_methodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_payment_methodArgs {
  @TypeGraphQL.Field(_type => [App_payment_methodCreateManyInput], {
    nullable: false
  })
  data!: App_payment_methodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
