import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutApp_shipping_methodInput } from "../inputs/MediaCreateNestedOneWithoutApp_shipping_methodInput";
import { Shipping_methodCreateNestedOneWithoutApp_shipping_methodInput } from "../inputs/Shipping_methodCreateNestedOneWithoutApp_shipping_methodInput";

@TypeGraphQL.InputType("App_shipping_methodCreateWithoutAppInput", {})
export class App_shipping_methodCreateWithoutAppInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  app_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutApp_shipping_methodInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodCreateNestedOneWithoutApp_shipping_methodInput, {
    nullable: false
  })
  shipping_method!: Shipping_methodCreateNestedOneWithoutApp_shipping_methodInput;
}
